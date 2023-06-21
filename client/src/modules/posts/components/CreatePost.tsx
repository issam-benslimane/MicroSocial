import React, { useState } from "react";
import { Textarea } from "../../common/components/form/TextareaField";
import Button from "../../common/components/elements/Button";
import { useCreatePost } from "../hooks";
import { InputField } from "../../common/components/form";

export const CreatePost = () => {
  const mutation = useCreatePost();
  const [text, setText] = useState("");
  const [error, setError] = useState<string>();
  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setError(undefined);
    if (text.trim() === "") {
      setError("post must not be empty");
      return;
    }
    await mutation.mutateAsync({ content: text });
    setText("");
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Textarea
        placeholder="Compose new posts..."
        className="text-sm w-full resize-none border rounded-sm p-2 border-slate-300"
        value={text}
        onChange={(ev) => setText((ev.target as { value: string }).value)}
        rows={5}
        error={error}
      />
      <input type="file" onChange={(ev) => console.log(ev.target)} />
      <Button variant="primary" loading={mutation.isLoading}>
        Post
      </Button>
    </form>
  );
};
