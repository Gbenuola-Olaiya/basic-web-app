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

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x+y).toString();
    }

  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x*y).toString();
  }

  // Which of the following numbers is the largest: 11, 18, 51?
  const largestComp = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
  if (largestComp) {
    const x: number = parseInt(largestComp[1]);
    const y: number = parseInt(largestComp[2]);
    const z: number = parseInt(largestComp[3]);
    const num_list = [x,y,z]
    return Math.max(...num_list).toString();
  }

  return "";
}
