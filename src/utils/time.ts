export const getCourseTime = (time: number): string => {
    const totalMinutes = time / 60;
    const minutesLeft = totalMinutes % 60;

    return `${(totalMinutes - minutesLeft) / 60}h ${Math.round(minutesLeft)}m`;
};
