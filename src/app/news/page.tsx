"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
              Stay up to date with the latest news and updates from the Roving
              Reactor project.
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
                      <div className="flex flex-col gap-1">
                        <span className="text-[#8be8d9]">{update.title}</span>
                        <span className="text-gray-400 text-sm">
                          {new Date(update.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="text-white space-y-4">
                        <PortableText value={update.content} />
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
