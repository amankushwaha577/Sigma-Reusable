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
        <div>
            <div style={styles.toolbar}>
                {/* Formatting buttons */}
                <button onClick={() => handleCommand("bold")} style={styles.button}>
                    Bold
                </button>
                <button onClick={() => handleCommand("italic")} style={styles.button}>
                    Italic
                </button>
                <button onClick={() => handleCommand("underline")} style={styles.button}>
                    Underline
                </button>
                <button onClick={() => handleCommand("justifyLeft")} style={styles.button}>
                    Align Left
                </button>
                <button onClick={() => handleCommand("justifyCenter")} style={styles.button}>
                    Align Center
                </button>
                <button onClick={() => handleCommand("justifyRight")} style={styles.button}>
                    Align Right
                </button>
                <button onClick={() => handleCommand("insertOrderedList")} style={styles.button}>
                    Ordered List
                </button>
                <button onClick={() => handleCommand("insertUnorderedList")} style={styles.button}>
                    Unordered List
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
            <div style={{ marginTop: "20px" }}>
                <h3>Editor Content:</h3>
                <div style={styles.preview}>{content}</div>
            </div>
        </div>
    );
};

// Simple inline styles
const styles = {
    toolbar: {
        display: "flex",
        gap: "10px",
        marginBottom: "10px",
    },
    button: {
        padding: "5px 10px",
        cursor: "pointer",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f4f4f4",
    },
    editor: {
        border: "1px solid #ccc",
        padding: "10px",
        minHeight: "200px",
        borderRadius: "4px",
    },
    preview: {
        padding: "10px",
        border: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
    },
};

export default CustomEditor;
