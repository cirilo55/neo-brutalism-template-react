import React, { useState, useEffect } from "react";
import {
  Wrapper,
  DaysGrid,
  CalendarWrapper,
  MonthCard,
  MonthTitle,
  DayButton,
  WeekHeader,
  WeekdayButton,
  WeekdayButtonsWrapper,
  ButtonsRow,
  HoursInputWrapper,

} from "./styles";
import Button from "@/components/Button";
import { updateJornada } from "@/api/jornadas";
import HoursInput from "@/components/HoursInput";
import toast from 'react-hot-toast';

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

const brazilianHolidays = [
  "2025-01-01", "2025-03-29", "2025-04-21", "2025-05-01",
  "2025-06-19", "2025-09-07", "2025-10-12", "2025-11-02",
  "2025-11-15", "2025-12-25",
];

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const getMonthDays = (year: number, month: number) => {
  const numDays = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const days = Array.from({ length: numDays }, (_, i) => new Date(year, month, i + 1));
  const emptyDays = Array.from({ length: firstDay }, () => null);
  return [...emptyDays, ...days];
};

type Props = {
  year?: number;
  markedDates?: string[];
  onDateChange?: (dates: string[]) => void;
  idIntegracao: string;
  entrada1: string;
  entrada2: string;
};

const YearlyCalendar: React.FC<Props> = ({
  year = new Date().getFullYear(),
  markedDates = [],
  onDateChange,
  idIntegracao,
  entrada1,
  entrada2

}) => {
  const [selectedDates, setSelectedDates] = useState<string[]>(Array.isArray(markedDates) ? markedDates : []);
  const [activeWeekdays, setActiveWeekdays] = useState<number[]>([]);
  const [entrada, setEntrada] = useState<string>("");
  const [saida, setSaida] = useState<string>(""); 
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    setEntrada(entrada1);
    setSaida(entrada2);
    if (Array.isArray(markedDates)) {
      setSelectedDates(markedDates);
    } else {
      console.error("markedDates não é um array:", markedDates);
      setSelectedDates([]); 
    }
  }, [markedDates, entrada1, entrada2]);

  useEffect(() => {
    const updatedActiveWeekdays = daysOfWeek.map((_, weekdayIndex) => {
      const allDatesForWeekday = months.flatMap((_, monthIndex) => {
        const days = getMonthDays(year, monthIndex);
        return days
          .filter((day) => day && day.getDay() === weekdayIndex)
          .map((day) => day!.toISOString().split("T")[0]);
      });

      const allSelected = allDatesForWeekday.every((date) => selectedDates.includes(date));
      return allSelected ? weekdayIndex : null;
    });

    setActiveWeekdays(updatedActiveWeekdays.filter((index) => index !== null) as number[]);
  }, [selectedDates, year]);

  const handleDayClick = (day: Date) => {
    const dayString = day.toISOString().split("T")[0];
    const updatedDates = selectedDates.includes(dayString)
      ? selectedDates.filter((date) => date !== dayString)
      : [...selectedDates, dayString];

    setSelectedDates(updatedDates);

    if (onDateChange) {
      onDateChange(updatedDates);
    }
  };

  const handleSelectWeekday = (weekdayIndex: number) => {
    const isActive = activeWeekdays.includes(weekdayIndex);

    const allDatesForWeekday = months.flatMap((_, monthIndex) => {
      const days = getMonthDays(year, monthIndex);
      return days.filter((day) => day && day.getDay() === weekdayIndex).map((day) => day!.toISOString().split("T")[0]);
    });

    const updatedDates = isActive
      ? selectedDates.filter((date) => !allDatesForWeekday.includes(date))
      : Array.from(new Set([...selectedDates, ...allDatesForWeekday]));

    setSelectedDates(updatedDates);

    if (onDateChange) {
      onDateChange(updatedDates);
    }
  };

  const handleSave = async () => {
    setIsLoading(true)
    const body = {
      diasNaoTrabalhados: selectedDates,
      entrada1: entrada,
      saida2: saida,
    };
    try {
      const response = await updateJornada(idIntegracao, body);

      if (!response) {
        throw new Error("Erro ao salvar os dias não trabalhados");
      }
      toast.success("Dias não trabalhados salvos com sucesso!");
      setIsLoading(false)
    } catch (error) {
      console.error("Erro ao salvar os dias não trabalhados:", error);
      toast.error("Erro ao salvar os dias não trabalhados. Tente novamente mais tarde.");
    }
  };

  return (
    <Wrapper>
      <div className="w-100 d-flex-end">
        <div className="w-25">
          <Button onClick={handleSave} isLoading={isLoading}>Salvar</Button>
        </div>
      </div>
      <ButtonsRow>
        <HoursInputWrapper>
            <HoursInput 
              value={entrada}
              onChange={setEntrada}
              label="Entrada"
            />
            <HoursInput
              label="Saida"
              value={saida}
              onChange={setSaida}
            />
        </HoursInputWrapper>
        <WeekdayButtonsWrapper>
        {daysOfWeek.map((day, index) => (
          <WeekdayButton
            key={index}
            className={activeWeekdays.includes(index) ? "selected" : ""}
            onClick={() => handleSelectWeekday(index)}
          >
            {day[0]} {/* Mostra apenas a primeira letra do dia */}
          </WeekdayButton>
        ))}
        </WeekdayButtonsWrapper>
      </ButtonsRow>
      <CalendarWrapper>
        {months.map((month, index) => {
          const days = getMonthDays(year, index);
          return (
            <MonthCard key={index}>
              <MonthTitle>{month}</MonthTitle>
              <WeekHeader>
                {daysOfWeek.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </WeekHeader>
              <DaysGrid>
                {days.map((day, i) =>
                  day ? (
                    <DayButton
                      key={i}
                      onClick={() => handleDayClick(day)}
                      className={`${selectedDates.includes(day.toISOString().split("T")[0]) ? "selected" : ""} ${
                        brazilianHolidays.includes(day.toISOString().split("T")[0]) ? "holiday" : ""
                      }`}
                    >
                      {day.getDate()}
                    </DayButton>
                  ) : (
                    <div key={i} />
                  )
                )}
              </DaysGrid>
            </MonthCard>
          );
        })}
      </CalendarWrapper>
    </Wrapper>
  );
};

export default YearlyCalendar;