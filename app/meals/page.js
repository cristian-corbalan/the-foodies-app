import MealsGrid from '@/components/meals/meals-grid';
import MealsHeader from '@/components/meals/meals-header';
import { getMeals } from '@/lib/meals';

export default function MealsPage () {
  const meals = getMeals();

  return (
    <>
      <MealsHeader/>
      <main>
        <MealsGrid meals={meals}/>
      </main>
    </>
  );
}
