"use client";

import { HoroscopeDay } from "@/types/horoscope";
import { HoroscopeCards } from "../components/HoroscopeCards";
import { HoroscopeDayCard } from "../components/HoroscopeDayCard";
import { useEffect, useMemo, useState } from "react";
import style from "../styles/main_section.module.css";
import { useRouter, useSearchParams } from "next/navigation";

interface MainSectionConainerProps {
  days: HoroscopeDay[];
}

export function MainSectionContainer({ days }: MainSectionConainerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = useMemo(() => new URLSearchParams(searchParams?.toString()), [searchParams]);

  const [currentDay, setCurrentDay] = useState<HoroscopeDay>(() => {
    const dateFromParams = params.get("date");
    return dateFromParams
      ? days.find((day) => day.date === dateFromParams) ?? days[0]
      : days[0];
  });

  useEffect(() => {
    if (!currentDay?.date) return;
    params.set("date", currentDay.date);
    router.push("?" + params.toString(), { scroll: false });
  }, [currentDay.date, params, router]);

  return (
    <div className={style["horoscope-main-section"]}>
      <HoroscopeCards days={days} currentDay={currentDay} onChange={setCurrentDay} />
      <HoroscopeDayCard day={currentDay} />
    </div>
  );
}
