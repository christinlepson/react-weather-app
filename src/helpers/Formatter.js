const getWeekday = (time) => {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = new Date(time * 1000);
    return days[day.getDay()];
};

export const Formatter = {
    getWeekday
};