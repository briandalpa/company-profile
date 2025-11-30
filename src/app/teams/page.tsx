import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import heImage from "@/assets/he-dongfeng.jpg";
import shenImage from "@/assets/shen-bo.jpg";
import xiaoImage from "@/assets/luo-xiao.jpg";
import qiImage from "@/assets/qi-xuefeng.jpg";
import yuImage from "@/assets/yu-shihai.jpg";
import xingpingImage from "@/assets/luo-xingping.jpg";
import liImage from "@/assets/li-ling.jpg";
import zhangImage from "@/assets/zhang-xiaoguang.jpg";
import wuImage from "@/assets/wu-wensheng.jpg";

interface CompanyManagement {
  name: string;
  role: string;
  bio: string;
  photo: StaticImageData;
}

export default function TeamsPage() {
  const management: CompanyManagement[] = [
    {
      name: "He Dongfeng",
      role: "Chairman & CPC Secretary",
      bio: "Master of Engineering, leads COMAC as Chairman and Secretary of the Party Committee, elected as alternate member of the 19th CPC Central Committee.",
      photo: heImage,
    },
    {
      name: "Shen Bo",
      role: "Vice Chairman & President",
      bio: "Master of Engineering, serves as Vice Chairman, President and Deputy Secretary of the Party Committee of COMAC.",
      photo: shenImage,
    },
    {
      name: "Luo Xiao",
      role: "Board Director & Deputy Secretary",
      bio: "Master of Science in Engineering, Deputy Secretary of the Party Committee and Director of COMAC.",
      photo: xiaoImage,
    },
    {
      name: "Qi Xuefeng",
      role: "Vice President",
      bio: "Doctor of Engineering, Member of Standing Committee of the Party Committee and Vice President of COMAC.",
      photo: qiImage,
    },
    {
      name: "Yu Shihai",
      role: "Chief Financial Officer",
      bio: "Bachelor of Economics, Member of Standing Committee of the Party Committee and CFO of COMAC.",
      photo: yuImage,
    },
    {
      name: "Luo Xingping",
      role: "Secretary of Commission for Discipline Inspection",
      bio: "Leads the Commission for Discipline Inspection and serves as Supervisory Attache of the State Committee of Supervisory.",
      photo: xingpingImage,
    },
    {
      name: "Li Ling",
      role: "Vice President",
      bio: "Master of Engineering, Member of Standing Committee of the Party Committee and Vice President of COMAC.",
      photo: liImage,
    },
    {
      name: "Zhang Xiaoguang",
      role: "Vice President",
      bio: "Doctor of Economics, Member of Standing Committee of the Party Committee and Vice President of COMAC.",
      photo: zhangImage,
    },
    {
      name: "Wu Wensheng",
      role: "Vice President",
      bio: "Master of Engineering, Member of Standing Committee of the Party Committee and Vice President of COMAC.",
      photo: wuImage,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our talented professionals are dedicated to pushing the boundaries
              of aerospace innovation and delivering excellence in every
              project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {management.map((member, index) => {
              return (
                <Card
                  key={member.name}
                  className="group pt-0 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden aspect-4/5">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold tracking-tight">
                          {member.name}
                        </h3>
                        <p className="text-sm text-primary font-semibold leading-snug">
                          {member.role}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-border/50">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Join Our Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We&apos;re always looking for talented individuals who share our
              passion for aerospace innovation. If you&apos;re ready to make an
              impact in the aviation industry, we&apos;d love to hear from you.
            </p>
            <div className="pt-4">
              <a
                href="mailto:careers@comac.cc"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
