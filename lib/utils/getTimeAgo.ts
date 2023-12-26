import { formatDistanceToNow } from "date-fns"

const getTimeAgo = (date) => {
  // Calcula la diferencia de tiempo en palabras
  const timeAgo = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: {
      formatDistance: (token, count, options) => {
        switch (token) {
          case "xSeconds":
            return "Unos segundos"
          case "halfAMinute":
            return "Medio minuto"
          case "lessThanXMinutes":
            return "Menos de " + count + " minutos"
          case "xMinutes":
            return count > 1 ? "Hace " + count + " minutos" : "Hace 1 minuto"
          case "aboutXHours":
            return count > 1 ? "Hace " + count + " horas" : "Hace 1 hora"
          case "xHours":
            return count > 1 ? "Hace " + count + " horas" : "Hace 1 hora"
          case "xDays":
            return count > 1 ? "Hace " + count + " días" : "Hace 1 día"
          case "aboutXMonths":
            return "Hace " + count + " meses"
          case "xMonths":
            return count > 1 ? "Hace " + count + " meses" : "Hace 1 mes"
          case "aboutXYears":
            return "Hace " + count + " años"
          case "xYears":
            return count + " años"
          case "overXYears":
            return "Más de " + count + " años"
          case "almostXYears":
            return "Casi " + count + " años"
          default:
            return ""
        }
      },
    },
  })

  return timeAgo
}

export default getTimeAgo
