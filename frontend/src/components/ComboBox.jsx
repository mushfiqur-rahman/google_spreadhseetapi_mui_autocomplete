import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { Button, CircularProgress } from "@mui/material";

export default function ComboBox() {
  const [q1Data, setQ1Data] = useState([]);
  const [q2Data, setQ2Data] = useState([]);
  const [q3Data, setQ3Data] = useState([]);
  const [selectedQ1Data, setSelectedQ1Data] = useState(null);
  const [selectedQ2Data, setSelectedQ2Data] = useState(null);
  const [selectedQ3Data, setSelectedQ3Data] = useState(null);

  const [loading, setLoading] = useState(false);
  const isSubmitDisabled =
    !selectedQ1Data || !selectedQ2Data || !selectedQ3Data;
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 50
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setLoading(true); // set loading to true when the fetch request is initiated
    setTimeout(() => {
      // add a 2s delay before fetching the data
      fetch("http://127.0.0.1:8000/q1/")
        .then((response) => response.json())
        .then((data) => {
          setQ1Data(data);
          setLoading(false); // set loading to false when the data is fetched
        })
        .catch((error) => {
          console.error("Error fetching q1 data:", error);
          setLoading(false); // set loading to false when an error occurs
        });

      fetch("http://127.0.0.1:8000/q2/")
        .then((response) => response.json())
        .then((data) => {
          setQ2Data(data);
          setLoading(false); // set loading to false when the data is fetched
        })
        .catch((error) => {
          console.error("Error fetching q2 data:", error);
          setLoading(false); // set loading to false when an error occurs
        });

      fetch("http://127.0.0.1:8000/q3/")
        .then((response) => response.json())
        .then((data) => {
          setQ3Data(data);
          setLoading(false); // set loading to false when the data is fetched
        })
        .catch((error) => {
          console.error("Error fetching q3 data:", error);
          setLoading(false); // set loading to false when an error occurs
        });
    }, 2000);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const payload = {
      q1: selectedQ1Data?.Item || "",
      q2: selectedQ2Data?.Item || "",
      q3: selectedQ3Data?.Item || "",
    };

    setLoading(true); // set loading to true when API request is initiated
    fetch("http://127.0.0.1:8000/api/services/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data posted successfully:", data);
        setLoading(false); // set loading back to false when data is posted
        alert("Data saved successfully!");
        setSelectedQ1Data(null);
        setSelectedQ2Data(null);
        setSelectedQ3Data(null);
      })
      .catch((error) => {
        setLoading(false); // set loading back to false when an error occurs
        console.error("Error posting data:", error);
      });
  };

  return (
    <>
      <Card sx={{ minWidth: 400, maxWidth: 1200, m: 8 }} elevation={11}>
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          m={1}
          pr={1}
          p={4}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          gap={2}
          flexWrap="wrap"
        >
          <Autocomplete
            disablePortal
            id="q1"
            options={loading ? [] : q1Data}
            value={selectedQ1Data}
            onChange={(e, v) => setSelectedQ1Data(v)}
            sx={{ width: "100%", maxWidth: 250, flexGrow: 1 }}
            getOptionLabel={(q1Data) => q1Data.Item || ""}
            renderInput={(params) => (
              <TextField
                {...params}
                label={
                  loading ? (
                    <CircularProgress
                      size={24}
                      variant="determinate"
                      value={progress}
                      color="primary"
                    />
                  ) : (
                    "I am from"
                  )
                }
                size="small"
              />
            )}
          />
          <Autocomplete
            disablePortal
            id="q2"
            options={loading ? [] : q2Data}
            value={selectedQ2Data}
            onChange={(e, v) => setSelectedQ2Data(v)}
            sx={{ width: "100%", maxWidth: 250, flexGrow: 1 }}
            getOptionLabel={(q2Data) => q2Data.Item || ""}
            renderInput={(params) => (
              <TextField
                {...params}
                label={
                  loading ? (
                    <CircularProgress
                      size={24}
                      variant="determinate"
                      value={progress}
                      color="primary"
                    />
                  ) : (
                    "How to"
                  )
                }
                size="small"
              />
            )}
          />
          <Autocomplete
            disablePortal
            id="q3"
            options={loading ? [] : q3Data}
            value={selectedQ3Data}
            onChange={(e, v) => setSelectedQ3Data(v)}
            sx={{ width: "100%", maxWidth: 250, flexGrow: 1 }}
            getOptionLabel={(q3Data) => q3Data.Item || ""}
            renderInput={(params) => (
              <TextField
                {...params}
                label={
                  loading ? (
                    <CircularProgress
                      size={24}
                      variant="determinate"
                      value={progress}
                      color="primary"
                    />
                  ) : (
                    "For"
                  )
                }
                size="small"
              />
            )}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
            disabled={isSubmitDisabled}
            sx={{ width: "100%", maxWidth: 250 }}
          >
            {loading ? (
              <CircularProgress
                size={24}
                variant="determinate"
                value={progress}
                color="primary"
              />
            ) : (
              "Submit"
            )}
          </Button>
        </Box>
      </Card>
    </>
  );
}
