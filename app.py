from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/memories")
def memories():
    return render_template("memories.html")

@app.route("/cake")
def cake():
    return render_template("cake.html")

# This page shows the Lights screen with the button,
# then does the 1s hold and transitions to the final scene.
@app.route("/celebrate")
def celebrate():
    return render_template("celebrate.html")

if __name__ == "__main__":
    app.run(debug=True)
