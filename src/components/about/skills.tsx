const groups=[
 {no:"01",title:"AI systems",skills:["Agentic AI","RAG","MCP / tool calling","Intelligent Document Processing","Evaluation","Human-in-the-loop"]},
 {no:"02",title:"Engineering",skills:["Python","FastAPI","Java","Spring Boot","Next.js","PostgreSQL"]},
 {no:"03",title:"Cloud + platform",skills:["OpenShift SME","Kubernetes","AWS Bedrock","Azure OpenAI","Terraform","Argo Workflows","CI/CD","Platform troubleshooting"]},
 {no:"04",title:"Leadership",skills:["COE leadership","Enterprise payments","Multi-team delivery","Discovery","Architecture","Client solutioning","Mentoring"]},
];
export function Skills(){return <div><p className="eyebrow text-accent">Capabilities</p><h2 className="section-title mt-4 max-w-4xl">Broad enough to see the system. Deep enough to build it.</h2><div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-2">{groups.map(group=><div key={group.title} className="bg-white p-7 sm:p-9"><span className="font-mono text-xs text-accent">{group.no}</span><h3 className="mt-8 text-2xl font-semibold tracking-[-.04em]">{group.title}</h3><div className="mt-6 flex flex-wrap gap-2">{group.skills.map(skill=><span key={skill} className="rounded-full bg-background px-3 py-2 text-xs font-medium text-muted">{skill}</span>)}</div></div>)}</div></div>}
