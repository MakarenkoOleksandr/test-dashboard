import AsideMenu from "./aside/Aside-menu";
import AsideUser from "./aside/Aside-user";

const Aside = ({ setActiveMenu }) => {
  return (
    <aside className="aside">
      <section className="aside__navigation">
        <AsideMenu setActiveMenu={setActiveMenu} />
        <AsideUser />
      </section>
    </aside>
  );
};

export default Aside;
