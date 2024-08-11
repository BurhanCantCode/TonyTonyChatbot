import React, { useState } from 'react';
import { Box, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import { db } from './firebaseConfig'; // Ensure this points to your actual config file
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

interface StarRatingProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ open, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  const handleSubmit = async () => {
    try {
      // Reference to the single document where all ratings will be stored
      const docRef = doc(db, 'ratings', 'aT2ONb2sX5odh6G0dSL0'); 

      // Update the document by adding the new rating to the 'ratings' array
      await updateDoc(docRef, {
        ratings: arrayUnion({
          rating: rating,
          timestamp: new Date(),
        }),
      });

      console.log('Rating added to the array:', rating);
    } catch (e) {
      console.error('Error updating document: ', e);
    }

    onSubmit(rating);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Rate Your Experience</DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="center" mb={2}>
          {[1, 2, 3, 4, 5].map((value) => (
            <IconButton key={value} onClick={() => handleStarClick(value)}>
              {value <= rating ? <Star color="primary" /> : <StarBorder />}
            </IconButton>
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default StarRating;
