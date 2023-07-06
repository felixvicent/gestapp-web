import dayjs from "dayjs";

export function formatDatetime(value: string) {
  return dayjs(value).format('DD/MM/YYYY H:m:s')
}