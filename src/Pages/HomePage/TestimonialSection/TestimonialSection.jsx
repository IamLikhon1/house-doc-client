import { useQuery } from "@tanstack/react-query"

function TestimonialSection() {
    const { isLoading,  data } = useQuery({
        queryKey: ['testData'],
        queryFn: () =>
          fetch('Test.json').then((res) =>
            res.json()
            ),
        })
        if (isLoading) return 'Loading...'
        console.log(data);
    return (
        <div>
            TestimonialSection
        </div>
    )
}

export default TestimonialSection