import markdownStyles from "styles/markdown.module.css";

type Props = {
  children: string;
};

export const Body = ({ children }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </div>
  );
};
