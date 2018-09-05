import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  isHome: boolean;
  title = 'app';
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  particlesJS: any;

  constructor(private route: ActivatedRoute,  
    private router: Router) {
     //this.isHome = true;
   this.getUserRole(window.location.href);
  }

  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges()
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background-color':'#007bff'
  };
  this.myParams = {
    particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#ffffff"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
          speed: 80,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 300,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },  
      move: {
        enable: true,
        speed: 12,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 800,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 800,
            size: 80,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 400,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true

    }
  };
 }

 private getUserRole(str) {
  // split content based on '/'
  let homePage = str.split('/');

  for ( let i = 0; i < homePage.length; i++) {
      let data = homePage[i];
      let re = /home/gi; 
      if (data.search(re) !== -1) {
      console.log(data)
      this.isHome = true; 
      }
  }
}

}
