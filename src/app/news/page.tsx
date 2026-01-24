"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const accordionStyles = {
  backgroundColor: "transparent",
  color: "white",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionDetails-root": {
    paddingRight: "16px",
    paddingTop: "8px",
    paddingBottom: "16px",
    paddingLeft: "0",
  },
  "& .MuiAccordionSummary-root": {
    paddingLeft: "0",
    minHeight: "48px",
    "&.Mui-expanded": {
      minHeight: "48px",
      marginBottom: "0",
    },
  },
  "& .MuiAccordionSummary-content": {
    margin: "12px 0",
    "&.Mui-expanded": {
      margin: "12px 0",
    },
  },
  "&.Mui-expanded": {
    marginTop: "0",
    marginBottom: "0",
  },
  margin: "0 !important",
};

interface Update {
  _id: string;
  title: string;
  date: string;
  content: any[];
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-6">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Image"}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          {value.caption && (
            <p className="text-gray-400 text-sm mt-2 text-center">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside ml-6 space-y-2 my-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside ml-6 space-y-2 my-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-white">{children}</li>,
    number: ({ children }: any) => <li className="text-white">{children}</li>,
  },
  block: {
    normal: ({ children }: any) => <p className="mb-4">{children}</p>,
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold mb-2">{children}</h4>,
  },
};

export default function NewsPage() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUpdates() {
      const query = `*[_type == "update"] | order(date desc) {
        _id,
        title,
        date,
        content
      }`;

      const data = await client.fetch(query);
      setUpdates(data);
      setLoading(false);
    }

    fetchUpdates();
  }, []);

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <main className="flex-grow relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl text-white mb-6">News</h1>

            <p className="text-white text-xl mb-6">
              Stay up to date with the latest news. Subscribe to get quarterly updates.
            </p>

            {/* News items from Sanity */}
            <Box
              sx={{ paddingRight: 2, paddingTop: 0, paddingBottom: 2 }}
              className="mt-8 mb-8"
            >
              {loading ? (
                <p className="text-white text-lg">Loading updates...</p>
              ) : updates.length > 0 ? (
                updates.map((update) => (
                  <Accordion key={update._id} sx={accordionStyles}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      sx={{
                        "& .MuiAccordionSummary-content": {
                          fontFamily: "Gabarito",
                          fontSize: "1.25rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        },
                      }}
                    >
                      <AddIcon sx={{ color: "white" }} />
                      <span className="text-[#8be8d9]">{update.title}</span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="text-white space-y-4">
                        <PortableText 
                          value={update.content} 
                          components={portableTextComponents}
                        />
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))
              ) : (
                <p className="text-white text-lg">
                  No updates yet. Check back soon!
                </p>
              )}
            </Box>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
