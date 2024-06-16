import Marketplace from "@/utils/components/marketplace/marketplace";
import Marketgrid from "@/utils/components/narketgrid/marketgrid";

export default function HomePage() {
  return (
    <div className={"conteiner"}>
      <div className={"marketside"}>
        <Marketplace />
      </div>
      <div className={"marketside"}>
        <Marketgrid />
      </div>
    </div>
  );
}
