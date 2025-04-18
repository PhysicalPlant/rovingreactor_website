"use client";
import { Popover, Typography, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useState, MouseEvent } from "react";

interface InfoPopoverProps {
    content: string | JSX.Element;
    iconColor?: string;
    linkText?: string;
    linkHref?: string;
    children?: React.ReactNode;
    header?: string;
}

export default function InfoPopover({
    content,
    iconColor = "rgb(124 45 18)",
    linkText,
    linkHref,
    children,
    header
}: InfoPopoverProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <div onClick={handleClick} className="cursor-pointer hover:text-orange-900">
                {children}
            </div>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{
                    '& .MuiPopover-paper': {
                        padding: '1rem',
                        maxWidth: '300px',
                        backgroundColor: '#fff',
                        color: 'rgb(124 45 18)',
                        border: '1px solid rgb(124 45 18)',
                        borderRadius: '0.5rem',
                    }
                }}
            >
                <div>
                    {header && (
                        <Typography
                            sx={{
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                color: 'rgb(124 45 18)'
                            }}
                        >
                            {header}
                        </Typography>
                    )}
                    {typeof content === 'string' ? (
                        <Typography sx={{ fontSize: '1rem', marginBottom: linkText ? '0.75rem' : 0 }}>
                            {content}
                        </Typography>
                    ) : content}

                    {linkText && linkHref && (
                        <Button
                            href={linkHref}
                            variant="outlined"
                            size="small"
                            sx={{
                                marginTop: '0.75rem',
                                color: 'rgb(124 45 18)',
                                borderColor: 'rgb(124 45 18)',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: 'rgb(124 45 18)',
                                    color: 'white',
                                    borderColor: 'rgb(124 45 18)',
                                }
                            }}
                        >
                            {linkText}
                        </Button>
                    )}
                </div>
            </Popover>
        </>
    );
} 