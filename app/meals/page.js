import classes from '@/app/meals/page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import MealsHeader from '@/components/meals/meals-header';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function Meals () {
  const meals = await getMeals();

  return <MealsGrid meals={meals}/>;
}

export default function MealsPage () {
  return (
    <>
      <MealsHeader/>
      <main>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
