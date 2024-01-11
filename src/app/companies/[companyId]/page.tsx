export default function CompaniesPage({ params }: { params: { companyId: string } }) {
    return (
        <div>
            <h1>Companies</h1>
            <p>Company ID: {params.companyId}</p>
        </div>
    )
}