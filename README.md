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
            {/* Toolbar */}
            <div style={styles.toolbar}>
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
                    <span style={{ fontSize: "14px" }}>Left</span>
                </button>
                <button onClick={() => handleCommand("justifyCenter")} style={styles.button}>
                    <span style={{ fontSize: "14px" }}>Center</span>
                </button>
                <button onClick={() => handleCommand("justifyRight")} style={styles.button}>
                    <span style={{ fontSize: "14px" }}>Right</span>
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

            {/* Editor Area */}
            <div
                ref={editorRef}
                contentEditable={true}
                onInput={handleContentChange}
                style={styles.editor}
                suppressContentEditableWarning={true}
            ></div>

            {/* Displaying Content */}
            <div style={styles.previewWrapper}>
                <h3 style={styles.heading}>Editor Content Preview:</h3>
                <div style={styles.preview}>{content}</div>
            </div>
        </div>
    );
};

// Vibrant Styles
const styles = {
    container: {
        fontFamily: "'Poppins', sans-serif",
        maxWidth: "900px",
        margin: "40px auto",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        background: "linear-gradient(to right, #FFDEE9, #B5FFFC)",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        padding: "20px",
    },
    toolbar: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        padding: "15px",
        background: "linear-gradient(to right, #FF7EB3, #FF758C)",
        borderRadius: "10px",
        marginBottom: "15px",
        justifyContent: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    button: {
        padding: "10px 15px",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "16px",
        borderRadius: "8px",
        border: "none",
        color: "#fff",
        backgroundColor: "#6A85B6",
        backgroundImage: "linear-gradient(to right, #92E1D6, #FFD6A5)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
        transition: "all 0.3s ease",
    },
    buttonHover: {
        ":hover": {
            transform: "translateY(-2px)",
            backgroundImage: "linear-gradient(to right, #FF758C, #FFDEE9)",
        },
    },
    editor: {
        minHeight: "300px",
        padding: "20px",
        borderRadius: "10px",
        border: "2px solid #ff7e79",
        backgroundColor: "#fff",
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#333",
        outline: "none",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    previewWrapper: {
        marginTop: "30px",
        padding: "15px",
        background: "linear-gradient(to right, #f7f7f7, #fff)",
        borderRadius: "8px",
        border: "1px solid #ddd",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
    },
    preview: {
        padding: "10px",
        fontSize: "15px",
        color: "#444",
        lineHeight: "1.6",
        wordBreak: "break-word",
        whiteSpace: "pre-wrap",
        backgroundColor: "#f9f9f9",
        borderRadius: "6px",
        border: "1px solid #ddd",
    },
    heading: {
        fontSize: "20px",
        marginBottom: "10px",
        color: "#444",
        textAlign: "center",
    },
};

export default CustomEditor;
