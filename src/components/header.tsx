import { MenuComponent } from "./menu";

export const HeaderComponent: React.FC = () => {
  return (
    <div className="h-24 fixed top-0 left-0 w-full z-50">
      <MenuComponent />
    </div>
  );
};
