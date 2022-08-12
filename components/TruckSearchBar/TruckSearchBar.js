import styles from './TruckSearchBar.module.scss';
import { Button } from '../Button';

export const TruckSearchBar = ({ total, searchTypes, searchAxleConfiguration }) => {
  return (
    <aside className={styles.searchForm}>
      <p className={styles.searchResult}>{total} results found</p>
      <div className={styles.searchType}>
        <label className={styles.ac__label} htmlFor="truck-type">
          Truck Type
        </label>
        <input className={styles.ac__input} type="checkbox" id="truck-type" />
        <img className={styles.ac__arrow} src="../../assets/svg/arrow.svg" alt="arrow" />
        <div className={styles.checkboxContainer}>
          {searchTypes.map((el) => {
            return <>
              <input className={styles.checkbox} type="checkbox" name={el} value={el} id={el} />
              <label htmlFor={el}>{el}</label>
            </>
          })}

          {/*<for*/}
          {/*|type| of=input.searchTypes>*/}
          {/*<input.checkbox type="checkbox" name=type value=type id=type>*/}
          {/*  <label htmlFor=type>${type}</label>*/}
          {/*</for>*/}
        </div>
      </div>
      <div className={styles.searchType}>
        <label className={styles.ac__label} htmlFor="truck-axle-config">
          Truck Axle
        </label>
        <input className={styles.ac__input} type="checkbox" id="truck-axle-config" />
        <img className={styles.ac__arrow} src="../../assets/svg/arrow.svg" alt="arrow" />
        <div className={styles.checkboxContainer}>
          {searchAxleConfiguration.map((el) => {
            return <>
              <input type="checkbox" name={el} value={el} id={el} />
              <label htmlFor={el}>{el}</label>
            </>
          })}
        </div>
      </div>
      <div className={styles.searchType}>
        <label className={styles.ac__label} htmlFor="truck-price">
          Price
        </label>
        <input className={styles.ac__input} type="checkbox" id="truck-price" />
        <img className={styles.ac__arrow} src="../../assets/svg/arrow.svg" alt="arrow" />
        <div className={styles.ac__content}>
          <div className={styles.fieldsContainer}>
            <input type="number" placeholder="MIN" />
            <input type="number" placeholder="MAX" />
          </div>
        </div>
      </div>
      <div className={styles.searchType}>
        <label className={styles.ac__label} htmlFor="truck-keyword">
          Search by:
        </label>
        <input className={styles.ac__input} type="checkbox" id="truck-keyword" />
        <img className={styles.ac__arrow} src="../../assets/svg/arrow.svg" alt="arrow" />
        <div className={styles.ac__content}>
          <div className={styles.fieldsContainer}>
            <input type="text" placeholder="KEYWORD" />
          </div>
        </div>
      </div>

      <Button text={"Search"} />
    </aside>
  );
};
