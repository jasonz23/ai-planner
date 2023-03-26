export const filterObjectsByEndTime = (objects: any) => {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
    
    return objects.filter((obj: { end: any}) => {
      const endTime = new Date(obj.end);
      return (endTime >= startOfDay && endTime <= endOfDay);
    });
  }