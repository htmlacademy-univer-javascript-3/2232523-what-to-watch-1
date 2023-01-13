import { FilmTabs } from '../../const';

type TabsProps = {
  currentTab: string,
  updateTab: (a: string) => void
};

function Tabs({currentTab, updateTab}: TabsProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${currentTab === FilmTabs.Overview && 'film-nav__item--active'}`}>
          <a
            href="#overviews"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                updateTab(FilmTabs.Overview);
              }
            }
          >
            {FilmTabs.Overview}
          </a>
        </li>
        <li className={`film-nav__item ${currentTab === FilmTabs.Details && 'film-nav__item--active'}`}>
          <a
            href="#details"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                updateTab(FilmTabs.Details);
              }
            }
          >
            {FilmTabs.Details}
          </a>
        </li>
        <li className={`film-nav__item ${currentTab === FilmTabs.Reviews && 'film-nav__item--active'}`}>
          <a
            href="#reviews"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                updateTab(FilmTabs.Reviews);
              }
            }
          >
            {FilmTabs.Reviews}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Tabs;
