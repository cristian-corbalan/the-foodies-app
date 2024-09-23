'use client';

import { useFormState } from 'react-dom';
import classes from './share-meal-form.module.css';
import FormSubmit from '@/components/forms/form-submit';
import ImagePicker from '@/components/forms/image-picker';
import { shareMeal } from '@/lib/actions';

export default function ShareMealForm () {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <form className={classes.form} action={formAction}>
      <div className={classes.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="10"
          required
        ></textarea>
      </p>
      <ImagePicker label="Choose an image" name="image" />
      {state.message && <p>{state.message}</p>}
      <p className={classes.actions}>
        <FormSubmit type="submit">Share Meal</FormSubmit>
      </p>
    </form>
  );
}
