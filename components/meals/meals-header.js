import Link from 'next/link';
import classes from './meals-header.module.css';

export default function MealsHeader () {
  return (
    <header className={classes.header}>
      <h1>Delicious meals created <span className={classes.highlight}>by you</span></h1>
      <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
      <p className={classes.cta}>
        <Link href="/meals/share">Share your favourite recipe</Link>
      </p>
    </header>
  );
}
