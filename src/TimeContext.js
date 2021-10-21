import React, { createContext, useMemo } from 'react';

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
	// date format '2021-12-24T22:00:00'
	const date = useMemo(() => {
		const date = new Date();
		date.setDate(date.getDate() + 2);
		return date;
	}, []);

	const value = { date };
	return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};
