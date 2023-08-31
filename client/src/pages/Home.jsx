/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headTextAnimation,
  slideAnimation,
  headContentAnimation,
} from "../config/motion";

import state from "../store";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div className="head-text" {...headContentAnimation}>
              <h1>
                LET'S <br className="xl:block hidden" />
                DO IT.
              </h1>
            </motion.div>
            <motion.div>
              <p className="max-w-md font-normal text-grey-600 text-base">
                Create your unique and exclusive shirt with our brand new 3D
                customization tool powered by AI.
              </p>
              <CustomButton
              type='filled'
              title='Customize it'
              handleClick = {()=>state.intro=false}
              customStyle ='w-fit px-4 py-2.5 font-bold text-sm '
              />
            </motion.div>


          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
