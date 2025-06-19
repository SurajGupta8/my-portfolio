import React from 'react';
import { theme } from '../theme/theme'; // Import the theme

// Function to render markdown-like bolding
export const renderMarkdownBold = (text: string): JSX.Element => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return (
        <>
            {parts.map((part, index) =>
                index % 2 === 1 ? <strong style={{ color: theme.palette.primary.dark }} key={index}>{part}</strong> : part
            )}
        </>
    );
};
