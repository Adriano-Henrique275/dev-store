import data from './data.json'

export async function GET() {
  try {
    return Response.json(data.products)
  } catch (error) {
    return console.error(error)
  }
}
