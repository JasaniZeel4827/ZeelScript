// 'use client';

import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';
import grainImage from '@/assets/images/grain.jpg';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      value: 'jasanizeel487@gmail.com',
      href: 'mailto:jasanizeel487@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-emerald-400" />,
      value: '+91-93162-93722',
      href: 'tel:+919316293722'
    },
    {
      icon: <MapPin className="w-5 h-5 text-emerald-400" />,
      value: 'Junagadh, GJ',
      href: 'https://maps.apple.com/place?auid=278608828980142166&address=Junagadh%2C+Gujarat%2C+India&coordinate=21.522781%2C70.458687&name=Junagadh&lsp=6489',
      target: '_blank'
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-20 pb-16">
        <div className="relative">
          <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}></div>
          
          <div className="container px-4 mx-auto">
            <SectionHeader
              eyebrow="Get In Touch"
              title="Let's Work Together"
              description="Have a project in mind or want to chat? Feel free to reach out."
            />
            
            <div className="mt-12 max-w-2xl mx-auto">
              <Card className="p-8">
                <CardHeader 
                  title="Contact Information" 
                  description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
                />
                <div className="mt-8 space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 hover:bg-white/5 rounded-lg transition-colors">
                      <div className="bg-emerald-400/10 p-2 rounded-lg">
                        {info.icon}
                      </div>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          target={info.target || '_self'}
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:underline text-lg"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-white text-lg">{info.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}