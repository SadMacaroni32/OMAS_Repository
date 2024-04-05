import Paper from "@mui/material/Paper/Paper";

export default function dashboardRecentComments() {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };

  return (
    <>
      <Paper elevation={6} sx={{ m: 1, p: 2, ...shadowStyle }}>
        RECENT COMMENTS
      </Paper>
    </>
  );
}
