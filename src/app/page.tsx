'use client';
import { Box, Button, Card, CircularProgress, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(100);
  const [random, setRandom] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setRandom(Math.floor(Math.random() * counter));
      setIsLoading(false);
    }, 2000);
  }, [counter]);

  return (
    <Box className="flex flex-col items-center justify-center h-screen">
      <Container className="flex gap-2">
        <Card className="flex flex-col justify-center items-center w-1/2 p-4 bg-orange-400 text-orange-700">
          <Typography variant="h2">Contador</Typography>
          <Typography variant="body2">This is a Next.js counter.</Typography>
          <Typography variant="h6" className="text-white font-bold">{counter}</Typography>
        </Card>
        <Card className="flex flex-col justify-center items-center w-1/2 p-4 bg-orange-400 text-orange-700">
          <Typography variant="h2">Randomizador</Typography>
          <Typography variant="body2">This is a Next.js randomizer.</Typography>
          <Typography variant="h6" className="text-white font-bold">{isLoading ? <CircularProgress size="20px" className="text-orange-700" /> : random}</Typography>
        </Card>
      </Container>
      <Button disabled={isLoading} variant="contained" className="bg-orange-400 hover:bg-orange-700 w-1/2 mt-3" onClick={
        () => {
          setCounter(counter + 1)
        }
      }>Reload</Button>
    </Box>
  )
}
