import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import { Bold, Italic, Underline as UnderlineIcon, List, ListOrdered, Strikethrough, Code, Undo2, Redo2, Link as LinkIcon } from "lucide-react";

interface RichTextEditorProps {
    content?: string;
    minCharacters?: number;
    placeholder?: string;
    onChange?: (html: string) => void;
    className?: string;
}

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

const RichTextEditor: React.FC<RichTextEditorProps> = ({
    content = "",
    minCharacters = 200,
    placeholder = "Please describe job details...",
    onChange,
    className = "",
}) => {
    const editor = useEditor({
        extensions: [
            StarterKit, // Includes bulletList, orderedList, listItem, hardBreak, history
            Underline,
            CharacterCount,
            Link.configure({
                openOnClick: true,
            }),
            Placeholder.configure({
                placeholder,
            }),
        ],
        content,
        editorProps: {
            attributes: {
                class: "prose max-w-none focus:outline-none min-h-[200px] px-4 py-3",
            },
        },
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            onChange?.(html);
        },
    });

    if (!editor) return null;

    const characterCount = editor.storage.characterCount.characters();

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
            <div className="flex justify-end px-4 py-2 text-sm text-gray-500 border-t border-gray-200">
                {characterCount} / {minCharacters} characters minimum
                {characterCount < minCharacters && (
                    <span className="text-red-500 ml-1">
                        (Need {minCharacters - characterCount} more characters)
                    </span>
                )}
            </div>
        </div>
    );
};

export default RichTextEditor;
