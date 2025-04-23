import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import { Bold, Italic, Underline as UnderlineIcon, List, ListOrdered, Strikethrough, Code, Undo2, Redo2, Link as LinkIcon } from "lucide-react";


// Types
interface RichTextEditorProps {
    content?: string;
    minCharacters?: number;
    placeholder?: string;
    onChange?: (html: string) => void;
    className?: string;
    value?: string;
}




// Menu Buttons
const MenuButton = ({
    isActive,
    onClick,
    children,
}: {
    isActive?: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) => (
    <button
        type="button"
        onMouseDown={(e) => e.preventDefault()} // Prevents scrolling issue
        onClick={onClick}
        className={`p-2 rounded-lg transition-colors ${isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-600 hover:bg-gray-100"
            }`}
    >
        {children}
    </button>
);



// Default Job Template
const defaultJobTemplate = `
<div class="job-posting">

  <h1>[Company Name] is hiring a [Job Title]</h1>

  <div class="section">
    <p>
      <strong>💼 Position:</strong> [Full-time / Part-time / Contract] [Job Level] [Job Title]</p>
    <p>
      <strong>📍 Location:</strong> [Location] (Remote: [Yes/No])</p>
    <p>
      <strong>💰 Compensation:</strong> $[Salary Range] + Benefits</p>
  </div>

  <div class="section">
    <h2>🚀 About [Company Name]</h2>
    <p>[Write 2-3 compelling sentences about your company's mission, impact, and culture]</p>
  </div>

  <div class="section">
    <h2>🎯 The Role</h2>
    <p>[One paragraph describing the role's impact and purpose]</p>
  </div>

  <div class="section">
    <h2>📋 What You'll Do</h2>
    <ul>
      <li>Design and implement [specific projects/features]</li>
      <li>Collaborate with [specific teams]</li>
      <li>Lead initiatives for [specific outcomes]</li>
      <li>Develop and maintain [specific systems]</li>
      <li>Mentor and support [team members]</li>
    </ul>
  </div>

  <div class="section">
    <h2>📚 What You'll Need</h2>
    <h3>Must-Have Requirements:</h3>
    <ul>
      <li>[X+] years of experience in [field]</li>
      <li>Proven track record of [achievement]</li>
      <li>Strong expertise in [technology]</li>
      <li>Relevant degree or experience</li>
    </ul>
    
    <h3>Nice-to-Have Skills:</h3>
    <ul>
      <li>Experience with [technology]</li>
      <li>Knowledge of [concept]</li>
      <li>Certification in [field]</li>
    </ul>
  </div>

  <div class="section">
    <h2>🌟 Why You'll Love Working Here</h2>
    
    <h3>Health & Wellness:</h3>
    <ul>
      <li>Comprehensive health coverage</li>
      <li>Mental health support</li>
      <li>Flexible PTO</li>
    </ul>

    <h3>Growth & Development:</h3>
    <ul>
      <li>Professional development budget</li>
      <li>Regular mentorship</li>
      <li>Training opportunities</li>
    </ul>

    <h3>Lifestyle & Perks:</h3>
    <ul>
      <li>Competitive compensation</li>
      <li>401(k) matching</li>
      <li>Remote work options</li>
    </ul>
  </div>

  <div class="section">
    <h2>💪 Our Culture & Values</h2>
    <p><strong>Innovation:</strong> [Innovation description]</p>
    <p><strong>Collaboration:</strong> [Collaboration description]</p>
    <p><strong>Growth Mindset:</strong> [Growth mindset description]</p>
    <p><strong>Impact:</strong> [Impact description]</p>
  </div>

  <div class="section">
    <h2>📝 Interview Process</h2>
    <ol>
      <li>Initial application review (1-2 days)</li>
      <li>Phone screen (30 minutes)</li>
      <li>Technical assessment</li>
      <li>Team interviews</li>
      <li>Final interview</li>
      <li>Offer and welcome aboard! 🎉</li>
    </ol>
  </div>

  <div class="section">
    <h2>✨ Diversity & Inclusion</h2>
    <p>At [Company Name], we're committed to building a diverse and inclusive workplace. We consider all qualified applicants without regard to race, color, religion, gender, sexual orientation, gender identity, national origin, age, disability, or veteran status.</p>
  </div>

  <div class="section">
    <h2>👋 Ready to Join Us?</h2>
    <p>We're excited to meet you! Please include [specific requirements] with your application.</p>
  </div>

  <p class="keywords"><em>Keywords: [Include relevant keywords for job board optimization]</em></p>
</div>
`.trim();





// Text Editor
const RichTextEditor: React.FC<RichTextEditorProps> = ({

    content = defaultJobTemplate,
    // minCharacters = 200,
    placeholder = "Please describe job details...",
    onChange,
    className = "",
    value, // Add this prop
}) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3]
                },
                bulletList: {
                    HTMLAttributes: {
                        class: 'list-disc ml-4 space-y-2'
                    }
                },
                orderedList: {
                    HTMLAttributes: {
                        class: 'list-decimal ml-4 space-y-2'
                    }
                },
                paragraph: {
                    HTMLAttributes: {
                        class: 'mb-4'
                    }
                }
            }),
            Underline,
            CharacterCount,
            Link.configure({
                openOnClick: true,
            }),
            Placeholder.configure({
                placeholder,
            }),
        ],
        content: value === undefined || value === '' ? content : value,
        editorProps: {
            attributes: {
                class: "prose prose-headings:mt-6 prose-headings:mb-4 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:mb-4 prose-ul:my-4 prose-ol:my-4 prose-li:my-2 prose-li:ml-4 max-w-none focus:outline-none min-h-[200px] px-4 py-3",
            },
        },
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            onChange?.(html);
        },
    });




    useEffect(() => {
        // Add custom styles to the editor
        if (editor) {
            const style = document.createElement('style');
            style.textContent = `
                .ProseMirror ul { list-style-type: disc !important; padding-left: 1.5em !important; margin: 1em 0 !important; }
                .ProseMirror ol { list-style-type: decimal !important; padding-left: 1.5em !important; margin: 1em 0 !important; }
                .ProseMirror li { margin: 0.5em 0 !important; }
                .ProseMirror h1, .ProseMirror h2, .ProseMirror h3 { margin-top: 1.5em !important; margin-bottom: 0.75em !important; }
                .ProseMirror p { margin: 1em 0 !important; }
                .ProseMirror .section { margin: 2em 0 !important; }
            `;
            document.head.appendChild(style);
            return () => {
                document.head.removeChild(style);
            };
        }
    }, [editor]);



    // Effect to handle value updates
    useEffect(() => {
        if (editor && value !== undefined) {
            // Only update if value is different from current content
            if (editor.getHTML() !== value) {
                // If value is empty and this is not the initial render, set the template
                if (value === '') {
                    editor.commands.setContent(content);
                } else {
                    editor.commands.setContent(value);
                }
            }
        }
    }, [editor, value, content]);



    if (!editor) return null;



    // const characterCount = editor.storage.characterCount.characters();


    return (


        <div className={`border rounded-lg shadow-sm bg-white ${className}`}>
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-200 bg-gray-50/50">
                <MenuButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    isActive={editor.isActive("bold")}
                >
                    <Bold size={18} />
                </MenuButton>

                <MenuButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    isActive={editor.isActive("italic")}
                >
                    <Italic size={18} />
                </MenuButton>

                <MenuButton
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    isActive={editor.isActive("underline")}
                >
                    <UnderlineIcon size={18} />
                </MenuButton>

                <MenuButton
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    isActive={editor.isActive("strike")}
                >
                    <Strikethrough size={18} />
                </MenuButton>

                <MenuButton
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    isActive={editor.isActive("code")}
                >
                    <Code size={18} />
                </MenuButton>

                <div className="w-px h-6 bg-gray-200 mx-1" />

                <MenuButton
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    isActive={editor.isActive("bulletList")}
                >
                    <List size={18} />
                </MenuButton>

                <MenuButton
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    isActive={editor.isActive("orderedList")}
                >
                    <ListOrdered size={18} />
                </MenuButton>

                <div className="w-px h-6 bg-gray-200 mx-1" />

                <MenuButton
                    onClick={() => {
                        const url = prompt("Enter a URL:");
                        if (url) editor.chain().focus().setLink({ href: url }).run();
                    }}
                >
                    <LinkIcon size={18} />
                </MenuButton>

                <div className="w-px h-6 bg-gray-200 mx-1" />

                <MenuButton onClick={() => editor.chain().focus().undo().run()}>
                    <Undo2 size={18} />
                </MenuButton>

                <MenuButton onClick={() => editor.chain().focus().redo().run()}>
                    <Redo2 size={18} />
                </MenuButton>
            </div>

            {/* Editor Content */}
            <EditorContent editor={editor} />

            {/* Character Counter */}
            {/* <div className="flex justify-end px-4 py-2 text-sm text-gray-500 border-t border-gray-200">
                {characterCount} / {minCharacters} characters minimum
                {characterCount < minCharacters && (
                    <span className="text-red-500 ml-1">
                        (Need {minCharacters - characterCount} more characters)
                    </span>
                )}
            </div> */}

        </div>
    );
};

export default RichTextEditor;