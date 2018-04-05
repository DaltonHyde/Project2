var GAME_LEVELS = [
  ["                                                                                    ",
   "                                                                                    ",
   "                                                                                    ",
   "      yyyo                                    yyy                                   ",
   "       yyyyy                                yyyyyyy                                 ",
   "         y             o      o                                       o             ",
   "                  x   xxx   xxxx                       o              x             ",
   "          x             x!!!x                         xx      xx    xx!xx           ",
   "           x            xxxxx                    xx                 x!!!x           ",
   "            x                          o     x                      xx!xx           ",
   "             x    o x                xxxxx!                          xvx            ",
   "                  x                      x!                                     xx  ",
   "  xx             x                       x!                    o                 x  ",
   "  x             x                        x!                                      x  ",
   "  x            x                         xxxxxxx                          x   o  x  ",
   "  x      o  xxxx             o                                          xx!   o  x  ",
   "  x   @     xxxx            xx                                       xxxx!!      x  ",
   "  x!!xxxxx  xxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxx     xxxxxxx!!!xxxxxxx  ",
   "  x!!xxxxx!!x                     xx!!!!x                  x     x     xxxxx        ",
   "  x!!xxxxx!!x                     xxx!!!x                  x!!!!!x                  ",
   "  xxxxxxxxxxx                     xxx!!!x                  x!!!!!x                  ",
   "                                  xxxxxxx                  xxxxxxx                  ",
   "                                                                                    ",
   "                                                                                    "],
  ["!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxx",
   "!!!!!!                                 v         vv             vv    v          v      v     x    v    x",
   "!!!!!!!!!                                                                                     x         x",
   "!!!!!!!!!!!!!                                                                                 x       o x",
   "!!!!!!!!!!!!!!!      @                                                                        x       xxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       o              o                                   x         x",
   "    v        v    v   v     v      x      xxx            xxx            xxxx       xx         xx        x",
   "                                   x                                                          x         x",
   "        v  v                       x             x                                            x         x",
   "                  v                x                               o                          x       xxx",
   "        v                          x      xxx         xx xxx       x   x xxxx        xx       xx        x",
   "                                   x                                                          x       o x",
   "                                   x             x               x                            x       xxx",
   "                                   x                                                          x         x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x      xxx        x  xxxxx         xxxx   xx       xx      x         x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                                                          xx       xx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                                                          x         x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x             x                                     o      x         x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x      xxx       xx   xxx      xx      xxxx        xx      xo        x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                                                          xx     xxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                    o                                     x         x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x      xxx      x   xxx           xxxx            xx       x         x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                                  v                       x         x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                                                           xx      xxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!         xx    x    xx                         x          x         x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                                                   !!!!! x       o x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!              x                 !!!!!!!!!!!!!!!!!!!!!! x      xxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                               xxxxxxxxxxxxxxxxxxxxxxxxxxx      x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                                   o   o                      x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                                                        xxxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                  v                         v                            v                                    ",
   " x                                                                                                            ",
   " x                        o                                           x            x                  o       ",
   " x                        x                                                              x            x       ",
   " x                                  =                  x                       =                              ",
   " x             x                                             x    o                                           ",
   " x                                            x                   x                x         x                ",
   " x      o                            x                                                                        ",
   " x      x                                                                  x                                  ",
   " x                                               |            x                     x            x            ",
   " x              =           x                         o           =                      |                    ",
   " x                                        x          x                                                        ",
   " x                                                               x        x       x                 o         ",
   " x                                                                                                            ",
   " x            x                     x             x        x         x                               x        ",
   " x                                               =                            x                               ",
   " x                        x                                                                   o               ",
   " x               o                                              x                              x              ",
   " x               x                 x                                                 x                        ",
   " x                                              |                                                             ",
   " x                                                                      x           o                         ",
   " x                                               !!!                                x                         ",
   " x                        |                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!                                   ",
   " x                             !!!!!!!!!!!!  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                        ",
   " x                       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!          ",
   " x     xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   " x                                                                        x                                   ",
   " x                                                                       xxx                                  ",
   " x                                                              xx     xxxxxxx    xx                          ",
   " x                                                             xxx   xxxxxxxxxxx  xxx                         ",
   " x                                                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxx                       ",
   " x                                                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                     ",
   " x                                                       xxxxxxv   x          x   vxxxxx                      ",
   " x                                                y          xx    x          x       xx                      ",
   " x                                              yyyyyy        x    x          x        x                      ",
   " x                            yy                 yyy               x          x                               ",
   " x                          yyyyy                                  x          x                               ",
   " xxxxxxxxx             yyyyyyyyyyyyy                               x          x                               ",
   " x       x                                                         x          x                               ",
   " x   xx  x                               =                         x          x                               ",
   " x   x   x                                                         x     w    x                               ",
   " x   xxxxx        y                       yyyyy                    x          x                               ",
   " x     o        yyyy                 xxxxxxxxxyyyy                 x          x                               ",
   " x          yyyyyyyyy            xxxxxxxxxxxxxxxxxyy               x    =     x                               ",
   " x                               x  xxxxxxxxxxx  x                 x          x                               ",
   " x                                  o   xxx   o                    x          x                               ",
   " x            =                         xxx                        x          x                               ",
   " x                                      xxx                                   x                               ",
   " x                         xxxx         xxx                                   x                               ",
   " x       xxxx    xxxx    xxxxxxxx       xxx                     xxxx         xxxx                             ",
   " x       o xxxxxxxx o   xxxxxxxxxx      xxx                    xxxxxxxxxxxxxxxxxxxx                           ",
   " x      u   o xx o        o xx o        xxx                   xxxxxxxxxxxxxxxxxxxxxx                          ",
   " x   @        xx            xx          xxx                  xxxxxxxxxxxxxxxxxxxxxxxx                         ",
   " x            xx            xx          xxx     o         xxxxxxxxxxxxxxxxxxxxxxxxxxxxx                       ",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              ",
   "                                                                                                             "],

  ["               =                          =                                       =          ",
   "                                                                                             ",
   "                              =                           =                        =         ",
   "              xx          xx                                                                 ",
   "                xx      xx    xxxx     x  |  x    xx      =      xx  xxxxxxxxx   xx     x    ",
   "     =            xx  xx    xx    xx   x     x     xx    xxx    xx       x       x x    x    ",
   "                    xx    xx       xx  x     x      xx   x x   xx        x       x  x   x    ",
   "         =          xx    xx       xx  x     x  =    xx  x x  xx      =  x  =    x   x  x    ",
   "                    xx     xx     xx   x     x        xx x x xx          x       x    x x    ",
   "                    xx       xxxxx      xxxxx          xxx xxx       xxxxxxxxx   x     xx    ",
   "   @                                                                                         ",
   "                                                                                             ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
