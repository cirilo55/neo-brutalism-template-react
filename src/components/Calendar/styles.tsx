import { styled } from "@stitches/react";

export const Wrapper = styled('div', {
    padding: '1rem',
  });
  
export const MonthSelector = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem',
  });
  
export const ToggleButton = styled('button', {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
    backgroundColor: '#fff',
    cursor: 'pointer',
    '&.active': {
      backgroundColor: '#4f46e5',
      color: '#fff',
    },
  });
  
export const CalendarWrapper = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
  });
  
export const MonthCard = styled('div', {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
  });
  
export const MonthTitle = styled('h3', {
    marginBottom: '0.5rem',
    fontSize: '1rem',
    textAlign: 'center',
  });
  
export const DaysGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '0.25rem',
  });
  
export const DayButton = styled('button', {
    aspectRatio: '1',
    fontSize: '0.75rem',
    borderRadius: '2px',
    border: 'none',
    backgroundColor: '#eee',
    cursor: 'pointer',
    '&.selected': {
      backgroundColor: '#c585e0',
      color: '#fff',
    },
    '&:hover': {
      backgroundColor: '#d4d4d4',
    },
    "&.holiday": {
      borderBottom: "2px solid red", // Borda inferior vermelha para feriados
    },
  });

export const WeekHeader = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "12px",
  });

  export const ButtonsRow = styled("div", {
    display: "flex",
    justifyContent: "space-between", // Garante que os elementos sejam distribuídos
    alignItems: "center", // Centraliza verticalmente
    marginBottom: "1rem",
    marginTop: "1rem",
  });
  
  export const HoursInputWrapper = styled("div", {
    display: "flex",
    gap: "8px",
  });
  
  export const WeekdayButtonsWrapper = styled("div", {
    display: "flex",
    gap: "8px",
  });
  
  export const WeekdayButton = styled("button", {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid #000",
    backgroundColor: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
    lineHeight: "36px",
    transition: "all 0.2s ease-in-out",
  
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  
    "&.selected": {
      backgroundColor: "#c585e0",
      color: "#fff",
      borderColor: "#000",
    },
  });