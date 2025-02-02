import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for NgFor

@Component({
  selector: 'app-root',
  imports: [CommonModule],  // Include CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BioData';

  photos: string[] = [];

  gpPhoto4: string = "https://lh3.googleusercontent.com/pw/AP1GczODq9Bl1sfJkz2p_Sq9hDSg4bvwdEsnvaZ2PZiAM3z4oPL_ySeHU7MJzVZI6J9OL3XMNrMWEX2e-4v78hIrBb8h104bNo_IlB_acN1gEb3NtmZXaBGkHSYO6n9EJSO71qn8dyFOrzKeLEwf17lmKTJz=w391-h607-s-no-gm?authuser=0";
  gpPhoto3: string = "https://lh3.googleusercontent.com/pw/AP1GczPndReHz1aXlMcxxmWcU1B6Ho18gLbJoHdCTV4vQv6GHv-J51tAiUIojN9wwptwwKe_m__o7yb-k_TrZAm35XpRbrJgUmxoXjSZE13KwjAVduWWtFMTH1dNMGBQDq579O_EoTS52Q8wM0nZhOSLAFsl=w390-h878-s-no-gm?authuser=0";
  gpPhoto2: string = "https://lh3.googleusercontent.com/pw/AP1GczPquATlgS7XQbut0t66jS6cwngYEjUmWqbzvxEXI-NgHnCAqqZymSzSF3PW1vIAS7IWndXeknhO7u8Jssr59xPNVYQMpSjMIBZZrChfDd54vXorqOa47z94NWSUkgoiLgpHSXcAWWW6tZabiWyb-WdC=w660-h878-s-no-gm";
  gpPhoto1: string = "https://lh3.googleusercontent.com/pw/AP1GczPb8FTHaSqU4CHXL0uNz2LGydKxbeYU5sjHLgKljyncWRE9nLcS_OyzyLzjknlfSh-ZV4kGNlmXBSE_KuMvN8h7brRtHKxPTVKCfr7l8sESVATm6QddXztrDxlQvj-LyAi8qzL0KbKhy0HgTa2iywLh=w494-h878-s-no-gm";

  ngOnInit() {
    this.photos.push(this.gpPhoto2, this.gpPhoto3, this.gpPhoto4,this.gpPhoto1);
  }
}
