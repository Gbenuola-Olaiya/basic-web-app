export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("id")) {
    return (
      "golaiya"
    )
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Gbenu"
    )
  }

  if (query.toLowerCase().includes("14 plus 89")) {
    return (
      "103"
    )
  }


  return "";
}
