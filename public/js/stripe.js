import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
  try {
    const stripe = Stripe(
      'pk_test_51KVYXdHWNkn4F6uG0kXYDsCQmWieXtoBGd9roczXQXcbYPhkmKe5W6HYIDBUAIM8cr0KsC9eoQIxYPqzV143eBWk00GFM8Lt9p'
    );
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
