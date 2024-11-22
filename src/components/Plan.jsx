import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Card } from "@/components/ui/card";
  
  export default function Plan() {
    const actionPlans = [
      {
        sno: "1",
        timeline: "2023Jan-2023Dec",
        action: "Initiation of centre for Memory Studies and Storytelling",
        outcome: "Proposed to take up a project. Publish papers",
        remarks: "Get the approval by 31Dec, 2022.",
      },
      {
        sno: "2",
        timeline: "2024Jan-2024Dec",
        action: "Continue the project",
        outcome:
          "Publish papers, books. Conduct an international conference. Give projects and internships to students.",
        remarks: "",
      },
      {
        sno: "3",
        timeline: "2025Jan-2025Dec",
        action: "Complete the project. Develop consultancy projects, and courses",
        outcome:
          "Complete at least one project. Get at least one consultancy project and develop at least one course to be offered to UG students.",
        remarks: "",
      },
      {
        sno: "4",
        timeline: "2026Jan-2026Dec",
        action: "Complete one consultancy project",
        outcome: "Publish papers, books and apply for patents.",
        remarks: "",
      },
      {
        sno: "5",
        timeline: "2027Jan-2027Dec",
        action: "Continue to get both consultancy and research projects.",
        outcome:
          "Sign MoUs with reputed foreign and Indian Universities. Publish papers, patents, books. Offer Ph. D programmes in Memory studies and Storytelling. Plan for teacher exchange programmes.",
        remarks: "",
      },
    ];
  
    return (
      <Card className="w-full p-4 md:p-6 mt-4">
        <h2 className="text-2xl font-bold text-center mb-6">Action Plan & Timelines</h2>
        <div className="overflow-x-auto">
          <Table className="table-auto border-collapse border border-gray-300 w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="border border-gray-300 w-[80px] text-center">S.No</TableHead>
                <TableHead className="border border-gray-300 w-[180px] text-center">Timeline</TableHead>
                <TableHead className="border border-gray-300 min-w-[200px] text-center">
                  Action Planned
                </TableHead>
                <TableHead className="border border-gray-300 min-w-[250px] text-center">
                  Outcome
                </TableHead>
                <TableHead className="border border-gray-300 min-w-[150px] text-center">
                  Remarks
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {actionPlans.map((plan) => (
                <TableRow key={plan.sno} className="hover:bg-gray-100">
                  <TableCell className="border border-gray-300 text-center font-medium">
                    {plan.sno}
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">{plan.timeline}</TableCell>
                  <TableCell className="border border-gray-300">{plan.action}</TableCell>
                  <TableCell className="border border-gray-300">{plan.outcome}</TableCell>
                  <TableCell className="border border-gray-300">{plan.remarks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    );
  }
  