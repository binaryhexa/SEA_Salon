import { ChangeEvent, useState, FormEvent } from 'react';
import { Rating, TextField } from '@mui/material';
import CustomButton from '../../../components/elements/CustomButton';

const CustomerReviews = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [reviews, setReviews] = useState<any[]>([]);
  const [customerName, setCustomerName] = useState<string>('');
  const [starRating, setStarRating] = useState<number>(1);
  const [comment, setComment] = useState<string>('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomerName(e.target.value);
  };

  const handleRatingChange = (newValue: number | null) => {
    if (newValue !== null) {
      setStarRating(newValue);
    }
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitReview = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newReview = {
      customerName: customerName,
      starRating: starRating,
      comment: comment,
    };
    setReviews([...reviews, newReview]);
    setCustomerName('');
    setStarRating(1);
    setComment('');
  };

  return (
    <div className="mx-auto max-w-lg p-4 text-primary40">
      <h2 className="mb-4 text-2xl font-bold">Customer Reviews</h2>
      <form onSubmit={handleSubmitReview} className="mb-4">
        <div className="mb-2">
          <label htmlFor="customerName" className="block font-medium">
            Customer Name:
          </label>
          <TextField
            className="mui-input w-full"
            id="customerName"
            value={customerName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium">Star Rating:</label>
          <Rating
            value={starRating}
            onChange={(_event, newValue) => {
              handleRatingChange(newValue);
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block font-medium">
            Comment:
          </label>
          <TextField
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            rows={4}
            multiline
            className="mui-input w-full"
          />
        </div>
        <CustomButton type="submit" label="Submit Reviews" />
      </form>
      <div className="mb-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="bg-gradient-card mb-10 rounded-md p-4">
              <p className="font-bold">{review.customerName}</p>
              <p>Rating: {review.starRating}</p>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="p-4 text-center">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerReviews;
