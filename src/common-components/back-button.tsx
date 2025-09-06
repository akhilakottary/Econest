import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// Define props interface
interface BackButtonProps {
  className?: string; // Optional className prop
}

const BackButton = ({ className }: BackButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className={className} // Apply the passed className
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      <ArrowLeftOutlined style={{ fontSize: "20px" }} />
    </button>
  );
};

export default BackButton;