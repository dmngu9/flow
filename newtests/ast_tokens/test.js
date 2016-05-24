/* @flow */


import {suite, test} from '../../tsrc/test/Tester';

export default suite(({addFile, flowCmd}) => [
  test('Run ast command on foo.js', [
    addFile('foo.js')
      .noNewErrors(),
    flowCmd(['ast', '--tokens', '--pretty'], 'foo.js')
      .stdout(
`{
  "errors": [
    {
      "loc": {
        "source": null,
        "start": {
          "line": 14,
          "column": 4
        },
        "end": {
          "line": 14,
          "column": 7
        }
      },
      "message": "Unexpected token var"
    }
  ],
  "tokens": [
    {
      "type": "T_REGEXP",
      "context": "normal",
      "loc": {
        "start": {
          "line": 2,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 7
        }
      },
      "range": [
        46,
        53
      ],
      "value": "/asdf/g"
    },
    {
      "type": "T_SEMICOLON",
      "context": "normal",
      "loc": {
        "start": {
          "line": 2,
          "column": 7
        },
        "end": {
          "line": 2,
          "column": 8
        }
      },
      "range": [
        53,
        54
      ],
      "value": ";"
    },
    {
      "type": "T_LESS_THAN",
      "context": "jsxTag",
      "loc": {
        "start": {
          "line": 5,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 1
        }
      },
      "range": [
        97,
        98
      ],
      "value": "<"
    },
    {
      "type": "T_JSX_IDENTIFIER",
      "context": "jsxTag",
      "loc": {
        "start": {
          "line": 5,
          "column": 1
        },
        "end": {
          "line": 5,
          "column": 4
        }
      },
      "range": [
        98,
        101
      ],
      "value": "div"
    },
    {
      "type": "T_JSX_IDENTIFIER",
      "context": "jsxTag",
      "loc": {
        "start": {
          "line": 5,
          "column": 5
        },
        "end": {
          "line": 5,
          "column": 10
        }
      },
      "range": [
        102,
        107
      ],
      "value": "attr1"
    },
    {
      "type": "T_ASSIGN",
      "context": "jsxTag",
      "loc": {
        "start": {
          "line": 5,
          "column": 10
        },
        "end": {
          "line": 5,
          "column": 11
        }
      },
      "range": [
        107,
        108
      ],
      "value": "="
    },
    {
      "type": "T_JSX_TEXT",
      "context": "jsxTag",
      "loc": {
        "start": {
          "line": 5,
          "column": 11
        },
        "end": {
          "line": 5,
          "column": 15
        }
      },
      "range": [
        108,
        112
      ],
      "value": "'42'"
    },
    {
      "type": "T_JSX_IDENTIFIER",
      "context": "jsxTag",
      "loc": {
        "start": {
          "line": 5,
          "column": 16
        },
        "end": {
          "line": 5,
          "column": 21
        }
      },
      "range": [
        113,
        118
      ],
      "value": "attr2"
    },
    {
      "type": "T_ASSIGN",
      "context": "jsxTag",
      "loc": {
        "start": {
          "line": 5,
          "column": 21
        },
        "end": {
          "line": 5,
          "column": 22
        }
      },
      "range": [
        118,
        119
      ],
      "value": "="
    },
    {
      "type": "T_LCURLY",
      "context": "normal",
      "loc": {
        "start": {
          "line": 5,
          "column": 22
        },
        "end": {
          "line": 5,
          "column": 23
        }
      },
      "range": [
        119,
        120
      ],
      "value": "{"
    },
    {
      "type": "T_STRING",
      "context": "normal",
      "loc": {
        "start": {
          "line": 5,
          "column": 23
        },
        "end": {
          "line": 5,
          "column": 29
        }
      },
      "range": [
        120,
        126
      ],
      "value": "'asdf'"
    },
    {
      "type": "T_RCURLY",
      "context": "normal",
      "loc": {
        "start": {
          "line": 5,
          "column": 29
        },
        "end": {
          "line": 5,
          "column": 30
        }
      },
      "range": [
        126,
        127
      ],
      "value": "}"
    },
    {
      "type": "T_GREATER_THAN",
      "context": "jsxTag",
      "loc": {
        "start": {
          "line": 5,
          "column": 31
        },
        "end": {
          "line": 5,
          "column": 32
        }
      },
      "range": [
        128,
        129
      ],
      "value": ">"
    },
    {
      "type": "T_JSX_TEXT",
      "context": "jsxChild",
      "loc": {
        "start": {
          "line": 5,
          "column": 32
        },
        "end": {
          "line": 5,
          "column": 36
        }
      },
      "range": [
        129,
        133
      ],
      "value": "asdf"
    },
    {
      "type": "T_LESS_THAN",
      "context": "jsxTag",
      "loc": {
        "start": {
          "line": 5,
          "column": 36
        },
        "end": {
          "line": 5,
          "column": 37
        }
      },
      "range": [
        133,
        134
      ],
      "value": "<"
    },
    {
      "type": "T_DIV",
      "context": "jsxTag",
      "loc": {
        "start": {
          "line": 5,
          "column": 37
        },
        "end": {
          "line": 5,
          "column": 38
        }
      },
      "range": [
        134,
        135
      ],
      "value": "/"
    },
    {
      "type": "T_JSX_IDENTIFIER",
      "context": "jsxTag",
      "loc": {
        "start": {
          "line": 5,
          "column": 38
        },
        "end": {
          "line": 5,
          "column": 41
        }
      },
      "range": [
        135,
        138
      ],
      "value": "div"
    },
    {
      "type": "T_GREATER_THAN",
      "context": "jsxTag",
      "loc": {
        "start": {
          "line": 5,
          "column": 41
        },
        "end": {
          "line": 5,
          "column": 42
        }
      },
      "range": [
        138,
        139
      ],
      "value": ">"
    },
    {
      "type": "T_SEMICOLON",
      "context": "normal",
      "loc": {
        "start": {
          "line": 5,
          "column": 42
        },
        "end": {
          "line": 5,
          "column": 43
        }
      },
      "range": [
        139,
        140
      ],
      "value": ";"
    },
    {
      "type": "T_VAR",
      "context": "normal",
      "loc": {
        "start": {
          "line": 8,
          "column": 0
        },
        "end": {
          "line": 8,
          "column": 3
        }
      },
      "range": [
        188,
        191
      ],
      "value": "var"
    },
    {
      "type": "T_IDENTIFIER",
      "context": "normal",
      "loc": {
        "start": {
          "line": 8,
          "column": 4
        },
        "end": {
          "line": 8,
          "column": 5
        }
      },
      "range": [
        192,
        193
      ],
      "value": "a"
    },
    {
      "type": "T_ASSIGN",
      "context": "normal",
      "loc": {
        "start": {
          "line": 8,
          "column": 6
        },
        "end": {
          "line": 8,
          "column": 7
        }
      },
      "range": [
        194,
        195
      ],
      "value": "="
    },
    {
      "type": "T_ASYNC",
      "context": "normal",
      "loc": {
        "start": {
          "line": 8,
          "column": 8
        },
        "end": {
          "line": 8,
          "column": 13
        }
      },
      "range": [
        196,
        201
      ],
      "value": "async"
    },
    {
      "type": "T_LPAREN",
      "context": "normal",
      "loc": {
        "start": {
          "line": 8,
          "column": 14
        },
        "end": {
          "line": 8,
          "column": 15
        }
      },
      "range": [
        202,
        203
      ],
      "value": "("
    },
    {
      "type": "T_RPAREN",
      "context": "normal",
      "loc": {
        "start": {
          "line": 8,
          "column": 15
        },
        "end": {
          "line": 8,
          "column": 16
        }
      },
      "range": [
        203,
        204
      ],
      "value": ")"
    },
    {
      "type": "T_ARROW",
      "context": "normal",
      "loc": {
        "start": {
          "line": 8,
          "column": 17
        },
        "end": {
          "line": 8,
          "column": 19
        }
      },
      "range": [
        205,
        207
      ],
      "value": "=>"
    },
    {
      "type": "T_NUMBER",
      "context": "normal",
      "loc": {
        "start": {
          "line": 8,
          "column": 20
        },
        "end": {
          "line": 8,
          "column": 22
        }
      },
      "range": [
        208,
        210
      ],
      "value": "42"
    },
    {
      "type": "T_SEMICOLON",
      "context": "normal",
      "loc": {
        "start": {
          "line": 8,
          "column": 22
        },
        "end": {
          "line": 8,
          "column": 23
        }
      },
      "range": [
        210,
        211
      ],
      "value": ";"
    },
    {
      "type": "T_VAR",
      "context": "normal",
      "loc": {
        "start": {
          "line": 11,
          "column": 0
        },
        "end": {
          "line": 11,
          "column": 3
        }
      },
      "range": [
        257,
        260
      ],
      "value": "var"
    },
    {
      "type": "T_IDENTIFIER",
      "context": "normal",
      "loc": {
        "start": {
          "line": 11,
          "column": 4
        },
        "end": {
          "line": 11,
          "column": 5
        }
      },
      "range": [
        261,
        262
      ],
      "value": "a"
    },
    {
      "type": "T_COLON",
      "context": "type",
      "loc": {
        "start": {
          "line": 11,
          "column": 5
        },
        "end": {
          "line": 11,
          "column": 6
        }
      },
      "range": [
        262,
        263
      ],
      "value": ":"
    },
    {
      "type": "T_NUMBER_TYPE",
      "context": "type",
      "loc": {
        "start": {
          "line": 11,
          "column": 7
        },
        "end": {
          "line": 11,
          "column": 13
        }
      },
      "range": [
        264,
        270
      ],
      "value": "number"
    },
    {
      "type": "T_ASSIGN",
      "context": "normal",
      "loc": {
        "start": {
          "line": 11,
          "column": 14
        },
        "end": {
          "line": 11,
          "column": 15
        }
      },
      "range": [
        271,
        272
      ],
      "value": "="
    },
    {
      "type": "T_NUMBER",
      "context": "normal",
      "loc": {
        "start": {
          "line": 11,
          "column": 16
        },
        "end": {
          "line": 11,
          "column": 18
        }
      },
      "range": [
        273,
        275
      ],
      "value": "42"
    },
    {
      "type": "T_SEMICOLON",
      "context": "normal",
      "loc": {
        "start": {
          "line": 11,
          "column": 18
        },
        "end": {
          "line": 11,
          "column": 19
        }
      },
      "range": [
        275,
        276
      ],
      "value": ";"
    },
    {
      "type": "T_VAR",
      "context": "normal",
      "loc": {
        "start": {
          "line": 14,
          "column": 0
        },
        "end": {
          "line": 14,
          "column": 3
        }
      },
      "range": [
        333,
        336
      ],
      "value": "var"
    },
    {
      "type": "T_VAR",
      "context": "normal",
      "loc": {
        "start": {
          "line": 14,
          "column": 4
        },
        "end": {
          "line": 14,
          "column": 7
        }
      },
      "range": [
        337,
        340
      ],
      "value": "var"
    },
    {
      "type": "T_IDENTIFIER",
      "context": "normal",
      "loc": {
        "start": {
          "line": 15,
          "column": 0
        },
        "end": {
          "line": 15,
          "column": 1
        }
      },
      "range": [
        341,
        342
      ],
      "value": "a"
    },
    {
      "type": "T_SEMICOLON",
      "context": "normal",
      "loc": {
        "start": {
          "line": 15,
          "column": 1
        },
        "end": {
          "line": 15,
          "column": 2
        }
      },
      "range": [
        342,
        343
      ],
      "value": ";"
    },
    {
      "type": "T_EOF",
      "context": "normal",
      "loc": {
        "start": {
          "line": 16,
          "column": 0
        },
        "end": {
          "line": 16,
          "column": 0
        }
      },
      "range": [
        344,
        344
      ],
      "value": ""
    }
  ],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 2,
      "column": 0
    },
    "end": {
      "line": 15,
      "column": 2
    }
  },
  "range": [
    46,
    343
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 2,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 8
        }
      },
      "range": [
        46,
        54
      ],
      "expression": {
        "type": "Literal",
        "loc": {
          "source": null,
          "start": {
            "line": 2,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 7
          }
        },
        "range": [
          46,
          53
        ],
        "value": null,
        "raw": "/asdf/g",
        "regex": {
          "pattern": "asdf",
          "flags": "g"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 5,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 43
        }
      },
      "range": [
        97,
        140
      ],
      "expression": {
        "type": "JSXElement",
        "loc": {
          "source": null,
          "start": {
            "line": 5,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 42
          }
        },
        "range": [
          97,
          139
        ],
        "openingElement": {
          "type": "JSXOpeningElement",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 32
            }
          },
          "range": [
            97,
            129
          ],
          "name": {
            "type": "JSXIdentifier",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 1
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "range": [
              98,
              101
            ],
            "name": "div"
          },
          "attributes": [
            {
              "type": "JSXAttribute",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 5
                },
                "end": {
                  "line": 5,
                  "column": 15
                }
              },
              "range": [
                102,
                112
              ],
              "name": {
                "type": "JSXIdentifier",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 5,
                    "column": 5
                  },
                  "end": {
                    "line": 5,
                    "column": 10
                  }
                },
                "range": [
                  102,
                  107
                ],
                "name": "attr1"
              },
              "value": {
                "type": "Literal",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 5,
                    "column": 11
                  },
                  "end": {
                    "line": 5,
                    "column": 15
                  }
                },
                "range": [
                  108,
                  112
                ],
                "value": "42",
                "raw": "'42'"
              }
            },
            {
              "type": "JSXAttribute",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 16
                },
                "end": {
                  "line": 5,
                  "column": 30
                }
              },
              "range": [
                113,
                127
              ],
              "name": {
                "type": "JSXIdentifier",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 5,
                    "column": 16
                  },
                  "end": {
                    "line": 5,
                    "column": 21
                  }
                },
                "range": [
                  113,
                  118
                ],
                "name": "attr2"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 5,
                    "column": 22
                  },
                  "end": {
                    "line": 5,
                    "column": 30
                  }
                },
                "range": [
                  119,
                  127
                ],
                "expression": {
                  "type": "Literal",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 5,
                      "column": 23
                    },
                    "end": {
                      "line": 5,
                      "column": 29
                    }
                  },
                  "range": [
                    120,
                    126
                  ],
                  "value": "asdf",
                  "raw": "'asdf'"
                }
              }
            }
          ],
          "selfClosing": false
        },
        "closingElement": {
          "type": "JSXClosingElement",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 36
            },
            "end": {
              "line": 5,
              "column": 42
            }
          },
          "range": [
            133,
            139
          ],
          "name": {
            "type": "JSXIdentifier",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 38
              },
              "end": {
                "line": 5,
                "column": 41
              }
            },
            "range": [
              135,
              138
            ],
            "name": "div"
          }
        },
        "children": [
          {
            "type": "JSXText",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 32
              },
              "end": {
                "line": 5,
                "column": 36
              }
            },
            "range": [
              129,
              133
            ],
            "value": "asdf",
            "raw": "asdf"
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 8,
          "column": 0
        },
        "end": {
          "line": 8,
          "column": 23
        }
      },
      "range": [
        188,
        211
      ],
      "declarations": [
        {
          "type": "VariableDeclarator",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 4
            },
            "end": {
              "line": 8,
              "column": 22
            }
          },
          "range": [
            192,
            210
          ],
          "id": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 4
              },
              "end": {
                "line": 8,
                "column": 5
              }
            },
            "range": [
              192,
              193
            ],
            "name": "a",
            "typeAnnotation": null,
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 8
              },
              "end": {
                "line": 8,
                "column": 22
              }
            },
            "range": [
              196,
              210
            ],
            "id": null,
            "params": [],
            "defaults": [],
            "rest": null,
            "body": {
              "type": "Literal",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 20
                },
                "end": {
                  "line": 8,
                  "column": 22
                }
              },
              "range": [
                208,
                210
              ],
              "value": 42,
              "raw": "42"
            },
            "async": true,
            "generator": false,
            "expression": true,
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 11,
          "column": 0
        },
        "end": {
          "line": 11,
          "column": 19
        }
      },
      "range": [
        257,
        276
      ],
      "declarations": [
        {
          "type": "VariableDeclarator",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 4
            },
            "end": {
              "line": 11,
              "column": 18
            }
          },
          "range": [
            261,
            275
          ],
          "id": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 13
              }
            },
            "range": [
              261,
              270
            ],
            "name": "a",
            "typeAnnotation": {
              "type": "TypeAnnotation",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 5
                },
                "end": {
                  "line": 11,
                  "column": 13
                }
              },
              "range": [
                262,
                270
              ],
              "typeAnnotation": {
                "type": "NumberTypeAnnotation",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 11,
                    "column": 7
                  },
                  "end": {
                    "line": 11,
                    "column": 13
                  }
                },
                "range": [
                  264,
                  270
                ]
              }
            },
            "optional": false
          },
          "init": {
            "type": "Literal",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 16
              },
              "end": {
                "line": 11,
                "column": 18
              }
            },
            "range": [
              273,
              275
            ],
            "value": 42,
            "raw": "42"
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 14,
          "column": 0
        },
        "end": {
          "line": 14,
          "column": 7
        }
      },
      "range": [
        333,
        340
      ],
      "declarations": [
        {
          "type": "VariableDeclarator",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 4
            },
            "end": {
              "line": 14,
              "column": 7
            }
          },
          "range": [
            337,
            340
          ],
          "id": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 4
              },
              "end": {
                "line": 14,
                "column": 7
              }
            },
            "range": [
              337,
              340
            ],
            "name": "var",
            "typeAnnotation": null,
            "optional": false
          },
          "init": null
        }
      ],
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 15,
          "column": 0
        },
        "end": {
          "line": 15,
          "column": 2
        }
      },
      "range": [
        341,
        343
      ],
      "expression": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 15,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 1
          }
        },
        "range": [
          341,
          342
        ],
        "name": "a",
        "typeAnnotation": null,
        "optional": false
      }
    }
  ],
  "comments": [
    {
      "type": "Block",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 45
        }
      },
      "range": [
        0,
        45
      ],
      "value": " Regex literals require a lexer mode change"
    },
    {
      "type": "Block",
      "loc": {
        "source": null,
        "start": {
          "line": 4,
          "column": 0
        },
        "end": {
          "line": 4,
          "column": 40
        }
      },
      "range": [
        56,
        96
      ],
      "value": " JSX also requires a lexer mode change"
    },
    {
      "type": "Line",
      "loc": {
        "source": null,
        "start": {
          "line": 7,
          "column": 0
        },
        "end": {
          "line": 7,
          "column": 45
        }
      },
      "range": [
        142,
        187
      ],
      "value": " Async arrow functions require backtracking"
    },
    {
      "type": "Line",
      "loc": {
        "source": null,
        "start": {
          "line": 10,
          "column": 0
        },
        "end": {
          "line": 10,
          "column": 43
        }
      },
      "range": [
        213,
        256
      ],
      "value": " Type annotations have a special lex mode"
    },
    {
      "type": "Line",
      "loc": {
        "source": null,
        "start": {
          "line": 13,
          "column": 0
        },
        "end": {
          "line": 13,
          "column": 54
        }
      },
      "range": [
        278,
        332
      ],
      "value": " Token stream should continue even with parse errors"
    }
  ]
}`,
),
  ]),
]);