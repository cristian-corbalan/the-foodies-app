import ShareMealForm from '@/components/forms/share-meal-form';
import classes from './page.module.css';

export const metadata = {
  title: 'Share meal',
  description: 'Share your delicious meal with our community!.'
};

export default function ShareMealPage () {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <ShareMealForm />
      </main>
    </>
  );
}
