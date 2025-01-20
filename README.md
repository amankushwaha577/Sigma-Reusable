# Sigma-Reusable

import React, { useRef, useState } from "react";

const CustomEditor = () => {
    const editorRef = useRef(null);
    const [content, setContent] = useState(""); // For tracking editor content

    // Function to execute formatting commands
    const handleCommand = (command, value = null) => {
        document.execCommand(command, false, value);
    };

    // Save content on change
    const handleContentChange = () => {
        setContent(editorRef.current.innerHTML);
    };

    return (
        <div style={styles.container}>
            <div style={styles.toolbar}>
                {/* Formatting buttons */}
                <button onClick={() => handleCommand("bold")} style={styles.button}>
                    <b>B</b>
                </button>
                <button onClick={() => handleCommand("italic")} style={styles.button}>
                    <i>I</i>
                </button>
                <button onClick={() => handleCommand("underline")} style={styles.button}>
                    <u>U</u>
                </button>
                <button onClick={() => handleCommand("justifyLeft")} style={styles.button}>
                    Left
                </button>
                <button onClick={() => handleCommand("justifyCenter")} style={styles.button}>
                    Center
                </button>
                <button onClick={() => handleCommand("justifyRight")} style={styles.button}>
                    Right
                </button>
                <button onClick={() => handleCommand("insertOrderedList")} style={styles.button}>
                    OL
                </button>
                <button onClick={() => handleCommand("insertUnorderedList")} style={styles.button}>
                    UL
                </button>
                <button onClick={() => handleCommand("undo")} style={styles.button}>
                    Undo
                </button>
                <button onClick={() => handleCommand("redo")} style={styles.button}>
                    Redo
                </button>
            </div>

            {/* Editable content area */}
            <div
                ref={editorRef}
                contentEditable={true}
                onInput={handleContentChange}
                style={styles.editor}
                suppressContentEditableWarning={true}
            ></div>

            {/* Displaying the current content */}
            <div style={styles.previewWrapper}>
                <h3>Editor Content:</h3>
                <div style={styles.preview}>{content}</div>
            </div>
        </div>
    );
};

// Sexy and modern styles
const styles = {
    container: {
        fontFamily: "'Roboto', sans-serif",
        maxWidth: "800px",
        margin: "40px auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        backgroundColor: "#fff",
    },
    toolbar: {
        display: "flex",
        gap: "10px",
        padding: "10px",
        backgroundColor: "#f4f4f4",
        borderBottom: "1px solid #ddd",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    button: {
        padding: "10px 15px",
        cursor: "pointer",
        border: "none",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "bold",
        backgroundColor: "#007BFF",
        color: "#fff",
        transition: "background-color 0.3s, transform 0.2s",
    },
    buttonHover: {
        ":hover": {
            backgroundColor: "#0056b3",
        },
    },
    editor: {
        minHeight: "300px",
        padding: "15px",
        border: "none",
        outline: "none",
        fontSize: "16px",
        lineHeight: "1.6",
        backgroundColor: "#fff",
    },
    previewWrapper: {
        margin: "20px",
    },
    preview: {
        padding: "15px",
        border: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        whiteSpace: "pre-wrap",
        fontSize: "14px",
        lineHeight: "1.5",
        color: "#333",
    },
};

export default CustomEditor;
