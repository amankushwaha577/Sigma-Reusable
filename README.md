# Sigma-Reusable

<script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script>

import { useEffect, useRef } from 'react';

export default function CKEditorComponent() {
    const editorRef = useRef(null); // Reference to the div where the editor will be initialized

    useEffect(() => {
        // Ensure ClassicEditor is loaded from the global `window` object
        if (typeof window !== 'undefined' && window.ClassicEditor) {
            window.ClassicEditor.create(editorRef.current, {
                toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList', 'undo', 'redo'],
            })
                .then((editor) => {
                    console.log('Editor initialized successfully', editor);
                })
                .catch((error) => {
                    console.error('Error initializing editor:', error);
                });
        }
    }, []);

    return (
        <div>
            <h2>CKEditor 5 with CDN in Next.js</h2>
            {/* This div will be replaced by CKEditor */}
            <div ref={editorRef}></div>
        </div>
    );
}


