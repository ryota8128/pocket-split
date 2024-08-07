interface Props {
  readonly content: string;
  readonly type: 'h1' | 'h2' | 'h3';
  readonly className?: string;
}

export const Header = ({ content, type, className }: Props) => {
  // typeに合わせてタグを作成
  const Tag = type;
  return <Tag className={`font-bold text-2xl text-blue-400 ${className}`}>{content}</Tag>;
};
